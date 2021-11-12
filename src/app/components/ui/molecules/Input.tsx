import React, { ChangeEvent, useState, useContext } from "react";
import { InputWrapper } from "../../styles/Input.style";
import { StoreContext } from "../../../context/store";

export default function Input() {
    const [searchTerm, setSearchTerm] = useState("");
    const [cache, setCache] = useState<string[]>([])

    const ctx = useContext(StoreContext);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
       
        setSearchTerm(e.currentTarget.value)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (cache.includes(searchTerm)) {
            ctx.setIsLoading(false);
        }
        if (searchTerm === '') {
            return;
        }
        
        ctx.setSearchTerm(searchTerm);
        ctx.setIsLoading(true);
        setCache((prev) => [...prev, searchTerm])
        setSearchTerm('');
        

    }
    
  return (
    <InputWrapper >
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="find something.." value={searchTerm} onChange={handleChange} />
        { !ctx.isLoading &&  <button>Search</button>}
      </form>
    </InputWrapper>
  );
}
