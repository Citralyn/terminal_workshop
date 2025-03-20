import { Route, Routes, HashRouter } from "react-router";
import Layout from "./layouts/Layout"
import Home from "./pages/main/Home"
import Terminal from "./pages/main/Terminal"

import Files from "./pages/files/Files"
import EditingFiles from "./pages/files/EditingFiles"
import SearchingFiles from "./pages/files/SearchingFiles"
import CompressingFiles from "./pages/files/CompressingFiles"

import System from "./pages/system/System"
import SystemInfo from "./pages/system/SystemInfo"
import SystemStorage from "./pages/system/SystemStorage"
import SystemProcesses from "./pages/system/processes/SystemProcesses"
import CommonProcesses from "./pages/system/processes/CommonProcesses"
import CronJobs from "./pages/system/processes/CronJobs"

import Networks from "./pages/networks/Networks"
import NetWeb from "./pages/networks/NetWeb"
import NetCommonPorts from "./pages/networks/NetCommonPorts"
import NetCommonProtocols from "./pages/networks/NetCommonProtocols"
import NetStats from "./pages/networks/NetStats"
import NetRemote from "./pages/networks/NetRemote"
import NetFirewalls from "./pages/networks/NetFirewalls"

import Users from './pages/users/Users';
import UserBasics from './pages/users/UserBasics';
import UserPermissions from './pages/users/UserPermissions';
import UserRoot from './pages/users/UserRoot';

import Scripting from './pages/scripting/Scripting';

import Misc from './pages/misc/Misc';
import MiscPackages from './pages/misc/MiscPackages';
import MiscServices from './pages/misc/MiscServices';
import MiscCommands from './pages/misc/MiscCommands';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="terminal_intro" element={<Terminal />}></Route>
          </Route>

          <Route path="/files" element={<Layout />}>
            <Route index element={<Files />}></Route>
            <Route path="editing" element={<EditingFiles />}></Route>
            <Route path="searching" element={<SearchingFiles />}></Route>
            <Route path="compressing" element={<CompressingFiles />}></Route>
          </Route>

          <Route path="/system" element={<Layout />}>
            <Route index element={<System />}></Route>
            <Route path="information" element={<SystemInfo />}></Route>
            <Route path="storage" element={<SystemStorage />}></Route>
            <Route path="processes" element={<Layout />}>
              <Route index element={<SystemProcesses />}></Route>
              <Route path="common_processes" element={<CommonProcesses />}></Route>
              <Route path="cron_jobs" element={<CronJobs />}></Route>
            </Route>
          </Route>

          <Route path="/networks" element={<Layout />}>
            <Route index element={<Networks />}></Route>
            <Route path="common_ports" element={<NetCommonPorts />}></Route>
            <Route path="common_protocols" element={<NetCommonProtocols />}></Route>
            <Route path="web" element={<NetWeb />}></Route>
            <Route path="remote_access" element={<NetRemote />}></Route>
            <Route path="stats" element={<NetStats />}></Route>
            <Route path="firewalls" element={<NetFirewalls />}></Route>
          </Route>

          <Route path="/users" element={<Layout />}>
          <Route index element={<Users />}></Route>
            <Route path="basics" element={<UserBasics />}></Route>
            <Route path="permissions" element={<UserPermissions />}></Route>
            <Route path="root" element={<UserRoot />}></Route>
          </Route>

          <Route path="/scripting" element={<Layout/>}>
            <Route index element={<Scripting />}></Route>
          </Route>
          
          <Route path="/misc" element={<Layout />}>
            <Route index element={<Misc />}></Route>
            <Route path="packages" element={<MiscPackages />}></Route>
            <Route path="services" element={<MiscServices />}></Route>
            <Route path="commands" element={<MiscCommands />}></Route>
          </Route>


        </Routes>
      </HashRouter>
    </>
  )
}

export default App
