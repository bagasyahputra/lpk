import { Icon } from '../atoms/icon';
import { Button } from '../atoms/button';

export function SearchBar() {
  return (
    <div className="bg-surface-container-lowest p-2 rounded-2xl shadow-xl shadow-on-surface/5 flex flex-col md:flex-row items-center gap-2 max-w-2xl w-full">
      <div className="flex items-center gap-3 px-4 w-full border-b md:border-b-0 md:border-r border-outline-variant/30">
        <Icon name="work" className="text-outline" />
        <input 
          className="bg-transparent border-none focus:outline-none w-full py-3 text-sm font-medium" 
          placeholder="Job title or role" 
          type="text"
        />
      </div>
      <div className="flex items-center gap-3 px-4 w-full">
        <Icon name="location_on" className="text-outline" />
        <select className="bg-transparent border-none focus:outline-none w-full py-3 text-sm font-medium appearance-none">
          <option>Select Country</option>
          <option>Japan</option>
          <option>South Korea</option>
          <option>Germany</option>
        </select>
      </div>
      <Button 
        variant="editorial" 
        className="w-full md:w-auto px-8 py-3.5 flex items-center justify-center gap-2"
      >
        <span>Search</span>
      </Button>
    </div>
  );
}
