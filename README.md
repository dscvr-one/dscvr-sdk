# DSCVR SDK

The DSCVR SDK is a TypeScript library designed to facilitate interactions with the DSCVR platform, leveraging DSCVR's Social Fabric Protocol

## Features

- Users
- Content
- Portals

## Installation


```bash
pnpm install @dscvr-one/dscvr-sdk
```
or
```bash
npm install @dscvr-one/dscvr-sdk
```


## Examples

### Create Identity

```ts
import { Ed25519KeyIdentity } from '@dscvr-one/dscvr-sdk';
import fs from 'fs';

const main = () => {
    let identity = Ed25519KeyIdentity.generate();
    console.log('Identity created:', identity.getPrincipal().toString());

    //save the identity to a file in ./.keys/dscvr-identity.json
    fs.writeFileSync('./.keys/dscvr-identity.json', JSON.stringify(identity.toJSON()));

    //load the identity from the file
    let loadedIdentity = Ed25519KeyIdentity.fromJSON(fs.readFileSync('./.keys/dscvr-identity.json').toString());
    console.log('Identity loaded:', loadedIdentity.getPrincipal().toString());
};

main();
```

Example Output
```bash
Identity created: 24xqa-heqzm-pc6yh-cn2kz-635nr-yxgk2-55x6a-5srrd-a4mom-ea4jf-fae
Identity loaded: 24xqa-heqzm-pc6yh-cn2kz-635nr-yxgk2-55x6a-5srrd-a4mom-ea4jf-fae
```


### Create Post

```ts
import { Ed25519KeyIdentity, DSCVRProtocol } from "@dscvr-one/dscvr-sdk";
import fs from "fs";

const main = async () => {
  //Load the identity from the file
  let identity = Ed25519KeyIdentity.fromJSON(
    fs.readFileSync("./.keys/dscvr-identity.json").toString()
  );
  console.log("Identity loaded:", identity.getPrincipal().toString());

  //Create a new DSCVRProtocol instance with the loaded identity
  let protocol = new DSCVRProtocol(identity);

  //Create a post to your profile
  let postResult = await protocol.content.createSelfPost("Hello, DSCVR!");

  if (postResult.type === "success") {
    let post = postResult.data;
    console.log("Post created:", post.id);
    console.log("Post URL:", `https://dscvr.one/post/${post.id}`);
  } else {
    console.error("Error creating post:", postResult.error);
  }
};

main();
```

Example Output
```bash
Identity loaded: bug6q-2lwju-tkuip-d76yw-e4zbg-bxt3q-msuuo-c4zso-fgolg-hz4y5-aqe
Post created: 1201410873629868033n
Post URL: https://dscvr.one/post/1201410873629868033
```