/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DoorOpen,
  Home,
  KanbanSquareDashed,
  Projector,
  Settings,
} from 'lucide-react';

import { Route } from './routes-types';

export const HomePage: Route = () => ({
  url: '/',
  label: 'Home',
  icon: Home,
});

export const SignInPageRoute: Route<{ next?: string }> = (params = {}) => {
  const { next } = params;
  const url = '/sign-in';
  if (next) url.concat('?next=', encodeURIComponent(next));
  return {
    label: 'Sign In',
    url: url.toString(),
    icon: DoorOpen,
  };
};

export const DashPage: Route = () => ({
  url: '/dashboard',
  label: 'Dashboard',
  icon: KanbanSquareDashed,
});

export const ProjectPage: Route<{ projectSlug: string }> = ({
  projectSlug,
}) => ({
  url: `/projects/${projectSlug}`,
  label: 'Project',
  icon: Projector,
});

export const ProjectSettingsPage: Route<{ projectSlug: string }> = ({
  projectSlug,
}) => ({
  url: `/projects/${projectSlug}/settings`,
  label: 'Project Settings',
  icon: KanbanSquareDashed,
});

export const AccountPage: Route = () => ({
  url: `/account`,
  label: 'Account Settings',
  icon: Settings,
});

export const AssetPage: Route<{ projectSlug: string; assetId: string }> = ({
  projectSlug,
  assetId,
}) => ({
  url: `/projects/${projectSlug}/${assetId}`,
  label: 'Asset',
  icon: KanbanSquareDashed,
});

export const publicRoutes: Route<any | null>[] = [HomePage];
export const appRoutes: Route<any | null>[] = [DashPage];
