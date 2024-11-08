import type { Params } from 'react-router-dom';
import { getPackage } from "../../api/queries/getPackage";
import { PackageDetails } from '../../api/types/packageDetails';


interface LoaderArgs {
    params: Params;
}
    
export interface DetailsLoaderResult {
    details: PackageDetails
}

export async function detailsLoader({params}: LoaderArgs): Promise<DetailsLoaderResult> {
    const {name} = params;

    if (!name) {
        throw new Error('Name param must be provided');
    }

    const details = await getPackage(name);
    // const details = await getPackage(props);
    // console.log('details data');
    // console.log(props);
    return {
        details
    }
}