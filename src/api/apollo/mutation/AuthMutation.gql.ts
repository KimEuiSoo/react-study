import { gql } from '@apollo/client';

export const LOGIN_REQUEST = gql`
    mutation LOGIN($request: LoginRequest!) {
        login(request: $request)
    }
`;