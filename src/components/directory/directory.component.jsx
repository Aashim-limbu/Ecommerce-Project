import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.style.scss";
export default function Directories({ categories }) {
	return (
		<div className="directories-container">
			{categories.map((category) => {
				return <DirectoryItem key={category.id} category={category} />;
			})}
		</div>
	);
}
