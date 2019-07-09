
import React from 'react';

//defined using a Context API <Provider> component and made available throughout your application using Context API <Consumer> components.
const UserContext = React.createContext();
export const Provider = UserContext.Provider;
export const Consumer = UserContext.Consumer;
export default UserContext;