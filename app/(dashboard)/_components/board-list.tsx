"use client";

import { EmptySearch } from "./empty-search";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favourites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [];

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favourites) {
    return <div>You have no favourites</div>;
  }

  if (!data?.length) {
    return <div>No boards at all</div>;
  }

  return <div>{JSON.stringify({ query })}</div>;
};
