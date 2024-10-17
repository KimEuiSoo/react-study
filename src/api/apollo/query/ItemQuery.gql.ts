import { gql } from '@apollo/client';

export const ALL_CATEGORY_TREE = gql`
    query ($request: String) {
        findSubItemCategoriesTree(categoryId: $request) {
            publicId
            title
        }
    }
`;