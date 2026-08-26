"use client";

import { useState } from "react";
import { activityCategories } from "../content/activities";

const filters = ["All", ...activityCategories.map((activity) => activity.title)] as const;

export function ActivityExplorer() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>(
    "All",
  );
  const visibleActivities =
    activeFilter === "All"
      ? activityCategories
      : activityCategories.filter((activity) => activity.title === activeFilter);

  return (
    <div className="mt-10 sm:mt-14">
      <div
        aria-label="Filter activities"
        className="flex flex-wrap gap-2 border-b border-border pb-6"
      >
        {filters.map((filter) => {
          const isActive = filter === activeFilter;

          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              className={`min-h-10 rounded-card border px-3 py-2 text-sm font-medium ${
                isActive
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-foreground hover:bg-surface"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {visibleActivities.length > 0 ? (
        <ul className="border-b border-border">
          {visibleActivities.map((activity) => (
            <li
              key={activity.title}
              className="grid gap-3 border-t border-border py-7 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8 sm:py-9"
            >
              <h2 className="text-xl font-semibold tracking-[-0.035em] text-foreground sm:text-2xl">
                {activity.title}
              </h2>
              <p className="text-base leading-7 text-muted">
                {activity.description}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="py-10 text-base text-muted" role="status">
          No activity areas match this filter.
        </p>
      )}
    </div>
  );
}
