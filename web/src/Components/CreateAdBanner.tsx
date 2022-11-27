import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';


export function CreateAdBanner() {
  return (
    <div className="pt-1 bg-livreto-gradient mt-8 self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#201700] px-8 py-6 flex justify-between itens-center">
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou um grupo de leitura?</strong>
            <span className="text-zinc-400 block">Publique um anúncio para encontrar um grupo!</span>
          </div>

          <Dialog.Trigger className="py-3 px-4 bg-pink-500 hover:bg-pink-900 text-white rounded flex itens-center gap-3">
            <MagnifyingGlassPlus size ={24} />
            Publicar anúncio
          </Dialog.Trigger>
        </div>
      </div>
  );
}