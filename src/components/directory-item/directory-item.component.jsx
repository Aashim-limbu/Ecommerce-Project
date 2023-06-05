import "./directory.styles.scss";
export default function DirectoryItem({ category: { imageUrl, title } }) {
	return (
		<div className="directory-container">
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="body">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
}
