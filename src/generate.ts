import { Project, SyntaxKind } from 'ts-morph';
import fs from 'fs';

const REMOVE_INTERFACES = ['_SERVICE'];
const REMOVE_VARIABLES = ['idlFactory', 'init'];

const main = async () => {
  const project = new Project();

  const sourceFile = project.addSourceFileAtPath('src/idl/dscvr.did.ts');

  if (sourceFile) {
    sourceFile.getStatements().forEach((statement) => {
      if (statement.isKind(SyntaxKind.VariableStatement)) {
        let isInRemoveList = REMOVE_VARIABLES.some((variable) =>
          statement.getText().startsWith(`export declare const ${variable}`),
        );
        if (isInRemoveList) {
          console.log(`  Removing variable statement: ${statement.getText()}`);
          statement.remove();
        }
      }
    });

    sourceFile.getInterfaces().forEach((interfaceDeclaration) => {
      console.log(`Processing interface: ${interfaceDeclaration.getName()}`);

      if (REMOVE_INTERFACES.includes(interfaceDeclaration.getName())) {
        console.log(`  Removing interface: ${interfaceDeclaration.getName()}`);
        interfaceDeclaration.remove();
        return;
      }

      interfaceDeclaration.getProperties().forEach((property) => {
        const typeNode = property.getTypeNode();
        if (typeNode && typeNode.getKind() === SyntaxKind.UnionType) {
          const unionType = typeNode.asKindOrThrow(SyntaxKind.UnionType);
          const types = unionType.getTypeNodes();

          const hasEmptyArray = types.some((type) => type.getText() === '[]');
          const tupleType = types.find(
            (type) =>
              type.getKind() === SyntaxKind.TupleType &&
              type.getText() !== '[]',
          );

          if (hasEmptyArray && tupleType) {
            // Extract the tuple type's inner type
            const tupleInnerType = tupleType.getText().replace(/^\[|\]$/g, '');
            console.log(`Tuple inner type: ${tupleType.getText()} `);

            // Replace the property type with an optional
            property.setType(`${tupleInnerType}`);
            property.setHasQuestionToken(true);

            console.log(
              `  Transformed property: ${property.getName()} to optional with type ${tupleInnerType}`,
            );
          }
        }
      });
    });

    // Save the transformed file as a new file
    let fileData = sourceFile.getFullText();
    const newFilePath = 'src/idl/dscvr-transformed-types.did.ts';
    console.log(`Transformed file saved as: ${newFilePath}`);
    fs.writeFileSync(newFilePath, fileData);
  }
};

main();
