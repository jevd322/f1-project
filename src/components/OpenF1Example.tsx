import { useEffect, useState } from 'react';
import { getSessions, getDrivers, type Session, type Driver } from '../services/openf1';

export default function OpenF1Example() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch latest sessions from 2024
        const sessionsData = await getSessions({ year: 2024 });
        setSessions(sessionsData.slice(-5)); // Get last 5 sessions

        // Fetch drivers from the latest session
        if (sessionsData.length > 0) {
          const latestSession = sessionsData[sessionsData.length - 1];
          const driversData = await getDrivers({ session_key: latestSession.session_key });
          setDrivers(driversData);
        }
      } catch (error) {
        console.error('Error fetching F1 data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div className="text-foreground">Loading F1 data...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-foreground">Recent Sessions</h2>
      <div className="grid gap-4 mb-8">
        {sessions.map((session) => (
          <div key={session.session_key} className="border border-border bg-card p-4 rounded">
            <h3 className="font-semibold text-card-foreground">{session.session_name}</h3>
            <p className="text-card-foreground">{session.country_name} - {session.circuit_short_name}</p>
            <p className="text-sm text-muted-foreground">{new Date(session.date_start).toLocaleDateString()}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4 text-foreground">Drivers</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {drivers.map((driver) => (
          <div key={driver.driver_number} className="border border-border bg-card p-4 rounded">
            <p className="font-semibold text-card-foreground">{driver.full_name}</p>
            <p className="text-sm text-card-foreground">{driver.team_name}</p>
            <p className="text-sm text-muted-foreground">#{driver.driver_number}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
