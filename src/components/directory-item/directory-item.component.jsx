import {
	BackgroundImage,
	Body,
	DirectoryContainer,
} from "./directory.styles.jsx";
import { useNavigate } from "react-router-dom";
export default function DirectoryItem({
	category: { imageUrl, title, route },
}) {
	const navigate = useNavigate();
	function onNavigateHandler(Route) {
		return navigate(Route);
	}
	return (
		<DirectoryContainer>
			<BackgroundImage imageurl={imageUrl} />
			<Body onClick={() => onNavigateHandler(route)}>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Body>
		</DirectoryContainer>
	);
}
