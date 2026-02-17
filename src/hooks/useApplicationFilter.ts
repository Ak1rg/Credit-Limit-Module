import type { ApplicationStatus, ClientApplication } from "../types/types";


export const filterApplications = (
  data: ClientApplication[],
  search: string,
  status: ApplicationStatus
) => {
  return data.filter((app) => {
    const matchesName = app.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus = status === "Все" ? true : app.status === status;

    return matchesName && matchesStatus;
  });
};