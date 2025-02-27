import type { SearchLoaderResult } from './searchLoader';
import PackageListItem from '../../components/PackageListItem';
import { useLoaderData } from 'react-router-dom';

export default function SearchPage() {
    const { searchResults } = useLoaderData() as SearchLoaderResult;
    const renderedResults = searchResults.map((result) => {
        return <PackageListItem pack={result} key={result.name} />
    }
    )
    // console.log(data.searchResults);

    return (
        <div>
            <h1 className='text-2xl font-bold my-6'>Search Results</h1>
            <div className='space-y-4 mt-4'>
                {renderedResults}
            </div>
        </div>

    )
}