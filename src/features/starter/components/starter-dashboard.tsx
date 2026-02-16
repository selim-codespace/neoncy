"use client";

import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/features/contact/components/contact-form";
import { useCounterStore } from "@/lib/stores/counter-store";
import { fetchJson } from "@/lib/utils/fetch-json";
import type { HealthResponse } from "@/types/health";

export const StarterDashboard = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  const healthQuery = useQuery({
    queryKey: ["health"],
    queryFn: () => fetchJson<HealthResponse>("/api/health"),
  });

  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Zustand Store</CardTitle>
          <CardDescription>
            Global state lives in a small store module with predictable actions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-semibold text-slate-900">{count}</p>
          <div className="flex flex-wrap gap-3">
            <Button onClick={increment}>Increment</Button>
            <Button variant="secondary" onClick={decrement}>
              Decrement
            </Button>
            <Button variant="ghost" onClick={reset}>
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Health Endpoint</CardTitle>
          <CardDescription>
            React Query handles request state, retries, and caching for client data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <Badge
              className={
                healthQuery.isError
                  ? "border-rose-300 bg-rose-100 text-rose-700"
                  : "border-emerald-300 bg-emerald-100 text-emerald-700"
              }
            >
              {healthQuery.isPending ? "Loading" : healthQuery.isError ? "Error" : "Healthy"}
            </Badge>
            <Button variant="secondary" onClick={() => healthQuery.refetch()}>
              Refresh
            </Button>
          </div>

          {healthQuery.data ? (
            <dl className="grid grid-cols-[120px_1fr] gap-y-2 text-sm text-slate-700">
              <dt className="font-medium text-slate-900">Timestamp</dt>
              <dd>{new Date(healthQuery.data.timestamp).toLocaleString()}</dd>
              <dt className="font-medium text-slate-900">Site URL</dt>
              <dd>{healthQuery.data.siteUrl}</dd>
              <dt className="font-medium text-slate-900">Version</dt>
              <dd>{healthQuery.data.version}</dd>
            </dl>
          ) : null}

          {healthQuery.isError ? (
            <p className="text-sm text-rose-700">{healthQuery.error.message}</p>
          ) : null}
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Zod + React Hook Form</CardTitle>
          <CardDescription>
            Validation schema is colocated with the feature and reused everywhere.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </section>
  );
};
