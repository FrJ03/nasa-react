import { FilterOptions } from "./filter-options";
import { DateRangeVM } from "./view-model/date-range";

export interface Filter {
    option: FilterOptions,
    value?: DateRangeVM
}