scraper_typescript app DEMO:

1. React router dom Header and Outlet components inherited from root page. Home page navigation provided by Link in the Header component. Search input component nested in the header.

https://github.com/user-attachments/assets/4c2be540-dacf-4339-8d60-7f8d6d390147


2. Search input component 'term' state maintained by useState hook. (Error handling thrown if search input left blank). Event handler useNavigate hook populates browser address with queried term. New instance of URL with 'term' as an argument.

Asyncronous promise function fetched from npmjs.org maps json response stored in the data variable. Search loader function passes async promise-type function results to the Search Page by use of interface.

Scraped results: 


https://github.com/user-attachments/assets/94f2abd1-911a-47c9-9581-cc79315ef117



Current website data comparison: 



https://github.com/user-attachments/assets/41f6bcb2-6dc0-46bb-a373-ec42a03aa02c



3. The package details page calls the interface result stored from the asyncronous function request to the npmjs.org url. The package name is the search parameter used in the mapping function.

Scraped package details page: 



https://github.com/user-attachments/assets/57a37ef1-0f4f-44c0-a6b4-baecdff1f4d7



Current website data comparison: 



https://github.com/user-attachments/assets/c95ff0ee-b493-4232-b37e-8ac304db31fe


