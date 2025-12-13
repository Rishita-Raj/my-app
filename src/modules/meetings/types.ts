import {inferRouterOutputs} from "@trpc/server";
import type {AppRouter} from "@/trpc/routers/_app";

export type MeetingGetOne = inferRouterOutputs<AppRouter>["meetings"]["getOne"];


// export type AgentGetOne =  {
//   id?: string;
//   name: string;
//   instructions: string;
// };


