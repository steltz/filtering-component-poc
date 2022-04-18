import create from "zustand";
import { devtools } from "zustand/middleware";

const setInputFilter = (payload) => {
  const { state, filter } = payload;
  const activeFilterCopy = [...state.activeFilter];
  const existingFilter = activeFilterCopy.find(
    (f) => f.selector === filter.selector
  );
  if (!!existingFilter) {
    const removeFilter = filter.value.length === 0;
    if (removeFilter) {
      activeFilterCopy = activeFilterCopy.filter(
        (f) => f.selector !== filter.selector
      );
    } else {
      existingFilter.value = filter.value;
    }
  } else {
    activeFilterCopy.push(filter);
  }
  return { ...state, activeFilter: activeFilterCopy };
};

const setCheckboxFilter = (payload) => {
  const { state, filter } = payload;
  const activeFilterCopy = [...state.activeFilter];
  const existingFilter = activeFilterCopy.find(
    (f) => f.selector === filter.selector
  );
  if (!!existingFilter) {
    const removeFilter = filter.values.length === 0;
    if (removeFilter) {
      activeFilterCopy = activeFilterCopy.filter(
        (f) => f.selector !== filter.selector
      );
    } else {
      existingFilter.values = filter.values;
    }
  } else {
    activeFilterCopy.push(filter);
  }
  return { ...state, activeFilter: activeFilterCopy };
};

const setSelectFilter = (payload) => {
  const { state, filter } = payload;
  const activeFilterCopy = [...state.activeFilter];
  const existingFilter = activeFilterCopy.find(
    (f) => f.selector === filter.selector
  );
  !!existingFilter
    ? (existingFilter.value = filter.value)
    : activeFilterCopy.push(filter);
  return { ...state, activeFilter: activeFilterCopy };
};

const activeFilterSetter = (payload) => {
  switch (payload?.filter?.type) {
    case "select":
      return setSelectFilter(payload);
    case "checkbox":
      return setCheckboxFilter(payload);
    case "input":
      return setInputFilter(payload);
    default:
      break;
  }
};

const useStore = create(
  devtools((set) => ({
    activeFilter: [],
    setActiveFilter: (filter) =>
      set((state) => {
        return activeFilterSetter({ state, filter });
      }),
    filterConfig: [
      {
        name: "Sort By",
        type: "select",
        displayOrder: 1,
        selector: "sortBy",
        options: [
          {
            label: "Most to least recipients",
            value: "most-to-least",
          },
          {
            label: "Least to most recipients",
            value: "least-to-most",
          },
        ],
      },
      {
        name: "View status",
        type: "checkbox",
        displayOrder: 2,
        selector: "viewStatus",
        options: [
          {
            label: "Proof",
            value: "proof",
          },
          {
            label: "Final",
            value: "final",
          },
        ],
      },
      {
        name: "Creative Name",
        type: "input",
        displayOrder: 3,
        selector: "creativeName",
        value: "",
      },
    ],
  }))
);

export default useStore;
