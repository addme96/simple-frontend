import React from "react";
import './App.css';
import {
    Admin,
    Resource as AdminResource,
    Datagrid,
    List,
    TextField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    TextInput,
} from 'react-admin';
import dataProvider from "./dataProvider";

export default function App() {
    return (
        <div className="App">
            <Admin dataProvider={dataProvider}>
                <AdminResource name="resources" list={ResourcesList} edit={ResourceEdit} create={ResourceCreate}/>
            </Admin>
        </div>
    );
};


const ResourcesList = () => (
    <List pagination={false} perPage={1000}>
        <Datagrid bulkActionButtons={false}>
            <TextField source="id"/>
            <TextField source="name"/>
            <EditButton/>
        </Datagrid>
    </List>
);

const ResourceEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" name="id"/>
            <TextInput source="name" name="name"/>
        </SimpleForm>
    </Edit>
);

const ResourceCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" name="name"/>
        </SimpleForm>
    </Create>
);