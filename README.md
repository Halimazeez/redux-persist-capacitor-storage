# Redux Persist Capacitor Filesystem Storage

> [Redux Persist](https://github.com/rt2zz/redux-persist/) storage engine working as an adapter to [Capacitor's Filesystem API](https://capacitor.ionicframework.com/docs/apis/filesystem)

### Install

```bash
yarn add @capacitor/core redux-persist-capacitor-storage
```

### Simple use-case with auth state

```javascript
import CapacitorStore from "redux-persist-capacitor-storage";
import { persistReducer } from "redux-persist";
import { auth } from "./auth";

const authPersistConfig = {
  key: "auth",
  storage: CapacitorStore
};

const appReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth)
});
```
