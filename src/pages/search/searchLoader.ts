import { searchPackages } from "../../api/queries/searchPackages";
import type { PackageSummary } from '../../api/types/packageSummary';

export interface SearchLoaderResult {
    searchResults: PackageSummary[];
}

export async function searchLoader({request}: { request: Request }): Promise<SearchLoaderResult>  {
    // console.log(request);
    const { searchParams } = new URL(request.url);
    const term = searchParams.get('term');

    if (!term) {
        throw new Error('Search term must be provided');
    }
    
    const results = await searchPackages(term);

    return {
        searchResults: results
    }

}