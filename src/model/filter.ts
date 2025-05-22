import { FilterOptions } from "./filter-options";
import { FilterVM } from "./view-model/filter";

export interface Filter {
    option: FilterOptions,
    value?: FilterVM
}