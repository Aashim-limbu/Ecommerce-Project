import Directories from "../../components/directory/directory.component";
import {Outlet} from "react-router-dom";
export default function Home() {
	return (
		<div>
			<Directories />;
			<Outlet />
		</div>
	);
}
