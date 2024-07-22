import { useEffect, useState } from "react";
import { getRecipies } from "./services/recipies";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Recipies = () => {
	const [recipies, setRecipies] = useState<any[]>([]);
	useEffect(() => {
		getRecipies().then((res) => {
			console.log("RES", res.documents);
			setRecipies(res.documents);
		});
	}, []);

	const renderBody = (recipie: any) => {
		return <div dangerouslySetInnerHTML={{ __html: recipie.recipieDescription_HTML }}></div>;
	};
	return (
		<DataTable value={recipies} tableStyle={{ minWidth: "50rem" }}>
			<Column field="recipieName" header="Name"></Column>
			<Column field="recipieTotalTime" header="Time"></Column>
			<Column field="recipieDescription_Text" header="Description" body={renderBody}></Column>
		</DataTable>
	);
};

export default Recipies;
