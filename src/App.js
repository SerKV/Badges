/**
				master-class не смотрел будет сюрприз :)
**/

function App (props) {
	return props.person.map(el => {
		return <div key={el.name} className="badges-showcase">
			<div className="badge">
				<div className="badge-header">
					<div className="badge-title master">{el['badge-title master']}</div>
					<div className="badge-title">{el['badge-title']}</div>
					<div className="badge-subtitle">{el['badge-subtitle']}</div>
				</div>
				<div className="badge-body">{el['name']}</div>
				<div className="badge-footer"/>
			</div>
		</div>;
	});

}

export default App;
