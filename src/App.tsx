import { useSearchParams } from 'react-router-dom';

import { useModal } from './context/ModalContext';

import Button from './components/ui/button';

import ItemsList from './components/items-list';

import ItemModal from './components/modals/item-modal';

import Plus from './components/icons/Plus';

import { Toaster } from 'sonner';

import './App.css';
import Arrow from './components/icons/Arrow';

function App() {
  const { openModal } = useModal();

  const [searchParams, setSearchParams] = useSearchParams();

  const sortOrder = searchParams.get('sort') as 'asc' | 'desc';

  const handleOpenItemModal = () => {
    openModal(
      <ItemModal />
    );
  }

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === 'desc' ? 'asc' : 'desc';
    setSearchParams({ sort: newSortOrder });
  }

  const removeSortOrder = () => {
    setSearchParams({});
  }

  return (
    <main className="flex items-center justify-center text-black bg-gray-100/95">
      <div className="min-h-screen sm:h-screen overflow-hidden p-2 sm:p-4 max-w-[800px] w-full">

        <div className="flex flex-col items-start h-full gap-6 p-4">
          <h1 className="mb-3 text-4xl font-bold lg:text-5xl xl:text-6xl lg:mb-3">
            List of Items Task
          </h1>

          <hr className='w-full bg-[#EAECF0]' />

          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center gap-2'>
              <Button
                onClick={toggleSortOrder}
                className="!bg-white !text-Gray-500 border-Gray-500 flex items-center gap-2"
              >
                <div className={`${sortOrder === 'desc' ? 'rotate-90' : '-rotate-90'} transition-all`}>
                  <Arrow width={16} height={16} />
                </div>
                Sort
              </Button>
              <Button
                onClick={removeSortOrder}
                className="!bg-white !text-Gray-500 border-Gray-500 flex items-center gap-2"
              >
                Reset Sort
              </Button>
            </div>
            <Button
              onClick={handleOpenItemModal}
              className='flex items-center gap-2'
            >
              <Plus />
              New Item
            </Button>
          </div>

          <ItemsList
            sortOrder={sortOrder}
          />
        </div>

      </div>

      <Toaster
        position="top-right"
        richColors
        expand={false}
      />
    </main>
  );
}

export default App;