// OpenF1 API Service
// API Documentation: https://openf1.org/

const BASE_URL = 'https://api.openf1.org/v1';

export interface Session {
  session_key: number;
  session_name: string;
  date_start: string;
  date_end: string;
  gmt_offset: string;
  session_type: string;
  meeting_key: number;
  location: string;
  country_name: string;
  circuit_short_name: string;
  year: number;
}

export interface Driver {
  driver_number: number;
  broadcast_name: string;
  full_name: string;
  name_acronym: string;
  team_name: string;
  team_colour: string;
  first_name: string;
  last_name: string;
  headshot_url: string;
  country_code: string;
}

export interface Position {
  date: string;
  driver_number: number;
  meeting_key: number;
  session_key: number;
  position: number;
}

// Fetch all sessions
export async function getSessions(params?: {
  year?: number;
  country_name?: string;
  session_name?: string;
}): Promise<Session[]> {
  const queryParams = new URLSearchParams();
  if (params?.year) queryParams.append('year', params.year.toString());
  if (params?.country_name) queryParams.append('country_name', params.country_name);
  if (params?.session_name) queryParams.append('session_name', params.session_name);
  
  const response = await fetch(`${BASE_URL}/sessions?${queryParams}`);
  if (!response.ok) throw new Error('Failed to fetch sessions');
  return response.json();
}

// Fetch drivers
export async function getDrivers(params?: {
  session_key?: number;
  driver_number?: number;
}): Promise<Driver[]> {
  const queryParams = new URLSearchParams();
  if (params?.session_key) queryParams.append('session_key', params.session_key.toString());
  if (params?.driver_number) queryParams.append('driver_number', params.driver_number.toString());
  
  const response = await fetch(`${BASE_URL}/drivers?${queryParams}`);
  if (!response.ok) throw new Error('Failed to fetch drivers');
  return response.json();
}

// Fetch position data
export async function getPositions(params: {
  session_key: number;
  driver_number?: number;
}): Promise<Position[]> {
  const queryParams = new URLSearchParams();
  queryParams.append('session_key', params.session_key.toString());
  if (params?.driver_number) queryParams.append('driver_number', params.driver_number.toString());
  
  const response = await fetch(`${BASE_URL}/position?${queryParams}`);
  if (!response.ok) throw new Error('Failed to fetch positions');
  return response.json();
}

export interface RaceResult {
  date: string;
  driver_number: number;
  position: number;
  session_key: number;
}

// Fetch latest session
export async function getLatestSession(): Promise<Session> {
  const response = await fetch(`${BASE_URL}/sessions?session_name=Race&year=2024`);
  if (!response.ok) throw new Error('Failed to fetch latest session');
  const sessions: Session[] = await response.json();
  return sessions[sessions.length - 1];
}

// Fetch race results for a session
export async function getRaceResults(session_key: number): Promise<RaceResult[]> {
  const response = await fetch(`${BASE_URL}/position?session_key=${session_key}`);
  if (!response.ok) throw new Error('Failed to fetch race results');
  const positions: RaceResult[] = await response.json();
  
  // Get final positions (last entry for each driver)
  const finalPositions = new Map<number, RaceResult>();
  positions.forEach(pos => {
    const existing = finalPositions.get(pos.driver_number);
    if (!existing || new Date(pos.date) > new Date(existing.date)) {
      finalPositions.set(pos.driver_number, pos);
    }
  });
  
  return Array.from(finalPositions.values()).sort((a, b) => a.position - b.position);
}
