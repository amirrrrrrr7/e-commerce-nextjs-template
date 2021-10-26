import request from "tools/Request";

import { CAT_LIST_HIERARCHY_URL } from '../URLs/categories';

export function getCategoriesHierarchyList(){
	return request.get(CAT_LIST_HIERARCHY_URL);
}