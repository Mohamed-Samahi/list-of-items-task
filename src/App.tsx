import { useModal } from './context/ModalContext';

import Button from './components/ui/button';

import ItemsList from './components/items-list';

import ItemModal from './components/modals/item-modal';

import Plus from './components/icons/Plus';

import './App.css';

function App() {
  const { openModal } = useModal();

  const handleOpenItemModal = () => {
    openModal(
      <ItemModal />
    );
  }

  return (
    <main className="flex items-center justify-center text-black bg-gray-100/95">
      <div className="min-h-screen h-screen overflow-hidden p-2 sm:p-4 max-w-[800px] w-full">

        <div className="flex flex-col items-start h-full gap-6 p-4">
          <h1 className="mb-3 text-4xl font-bold lg:text-5xl xl:text-6xl lg:mb-3">
            List of Items Task
          </h1>

          <hr className='w-full bg-[#EAECF0]' />

          <Button
            onClick={handleOpenItemModal}
            className='flex items-center gap-2'
          >
            <Plus />
            New Item
          </Button>

          <ItemsList />
        </div>

      </div>
    </main>
  );
}

export default App;