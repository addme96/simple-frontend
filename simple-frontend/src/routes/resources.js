import GridResources from "../components/GridResources";

export default function Resources() {
    return (
        <div>
            <p>
                The below data is fetched from Golang simple backend service which in turn fetches data from
                PostgreSQL DB.
            </p>
            <GridResources/>
        </div>
    );
}
