import { SessionProvider } from "../components/SessionProvider";
import SideBar from "../components/SideBar";
import { getServerSession } from "next-auth";
import "../styles/globals.css";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Login from "../components/Login";
import ClientProvider from "../components/ClientProvider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  // Debugging purposes:
  if (!session) {
    console.log("No session found, session could still be loading");
  } else {
    console.log("Session found");
    console.log(session);
  }

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {/* render login if there is no session, otherwise render the page */}
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              {/* Sidebar */}
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[17rem]">
                <SideBar />
              </div>
              {/* ClientProvider - Notification */}
              <ClientProvider />

              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
