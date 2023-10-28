import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={onClose} primary>
        I accept!
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={onClose} actionBar={actionBar}>
      <p>
        Lorems ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        laborum debitis illum eaque explicabo corporis? Nesciunt odio neque
        culpa consequatur?
      </p>
    </Modal>
  );

  const parag = (
    <div>
      <h1 className="text-3xl">Title</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        ipsam dolorum id aliquam modi nostrum illum sed maxime et quos, beatae,
        culpa quia pariatur officiis alias fugiat totam eveniet facilis.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        ipsam dolorum id aliquam modi nostrum illum sed maxime et quos, beatae,
        culpa quia pariatur officiis alias fugiat totam eveniet facilis.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        ipsam dolorum id aliquam modi nostrum illum sed maxime et quos, beatae,
        culpa quia pariatur officiis alias fugiat totam eveniet facilis.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        ipsam dolorum id aliquam modi nostrum illum sed maxime et quos, beatae,
        culpa quia pariatur officiis alias fugiat totam eveniet facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sequi,
        nemo natus molestiae excepturi quas accusantium deleniti et. Error quia
        possimus magni ea totam placeat eveniet cumque vitae illo, aliquam
        tenetur eum doloremque! Debitis, iure nostrum nulla maxime beatae
        doloremque. Illo veniam magnam repellendus vero sit consequatur animi
        voluptas mollitia ullam quaerat corrupti magni, aperiam tenetur
        laboriosam molestias praesentium? Modi obcaecati esse debitis, expedita
        aliquam quos laborum illum ad eveniet reiciendis dolorum ullam natus hic
        at nisi sequi quibusdam rerum architecto suscipit neque eos ipsam ex?
        Esse, quo doloremque odit nostrum placeat voluptate dolorum tenetur
        magni voluptas a ratione saepe eos error expedita iste tempore
        architecto! Vitae ratione eum iste distinctio quasi velit voluptatem ad
        maiores blanditiis eos repellendus, saepe aliquid possimus quisquam nam,
        cupiditate architecto voluptatibus temporibus aut neque sed! Id ipsum
        maxime iusto magni ab dolores quisquam temporibus iste vero rerum
        distinctio totam fugit non, commodi quos asperiores qui, mollitia
        possimus molestias! Aspernatur ad et natus, suscipit id dicta ullam.
        Magni assumenda alias iusto pariatur perferendis ratione nihil eius ut?
        Beatae reprehenderit quis fugit possimus nulla quasi, cumque consectetur
        distinctio cum. Perspiciatis iusto vel sequi veniam numquam deserunt,
        debitis distinctio, commodi non at quae. Asperiores dolorum doloribus
        reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        explicabo quos fuga ipsum, alias velit reprehenderit a beatae ex impedit
        aspernatur blanditiis ipsam voluptas minima, facilis nobis iste soluta
        dolor voluptate. Iure porro nisi eum laudantium inventore ad odit
        officia cupiditate, nemo neque ducimus omnis architecto eaque temporibus
        ullam, in at, dolor vitae repellendus quam vero fugit? Delectus nesciunt
        repudiandae voluptate nulla doloremque sunt? In voluptatem ex ipsum
        sapiente aliquam cumque commodi, libero quidem itaque, beatae eum qui
        deserunt reiciendis eos dolorum aspernatur pariatur nisi modi dolor
        nulla molestiae cupiditate? Cum quod eum quas repudiandae! Asperiores
        esse hic facilis ab quasi possimus quaerat vero laudantium voluptatibus
        quisquam doloremque, voluptatem voluptas laboriosam. Nesciunt eius
        expedita alias quia velit accusamus esse, incidunt mollitia id pariatur
        nihil, aut, quaerat tenetur vitae rem ipsum et eos sequi ratione fugit
        similique perferendis. Enim sit blanditiis aspernatur repellat. Placeat,
        eaque iusto ad nostrum in laudantium, labore fugit facere corrupti
        inventore esse odit pariatur. Laborum rerum excepturi obcaecati
        repellendus soluta! Quia autem similique minima omnis unde neque,
        maiores delectus fuga quos tempore architecto molestiae, ullam
        reprehenderit tempora animi consequuntur? Impedit magnam reiciendis
        perspiciatis tempore laudantium aperiam optio id cum, quae alias
        doloremque, excepturi dicta obcaecati! Hic eligendi eos ab nam sed rem
        repellat tempora ullam quas perspiciatis, quasi pariatur exercitationem
        doloremque quisquam a ad obcaecati? Eveniet qui labore in nemo
        architecto neque minus repellendus! Deleniti non voluptate beatae animi
        amet, cumque accusantium? Mollitia eveniet tenetur dolor molestias
        voluptate assumenda inventore aliquid vitae aspernatur magni! Soluta,
        possimus! Ipsum laborum animi necessitatibus dolor cumque, accusamus
        commodi suscipit pariatur obcaecati dolorem explicabo officiis, est nam.
        Mollitia debitis modi reiciendis deserunt totam rem? Distinctio mollitia
        reiciendis error ipsum consequuntur, officia, sequi necessitatibus
        inventore quas doloribus assumenda illo dolorum? Veniam similique, unde
        autem illo corrupti quas modi ex ab libero, quibusdam veritatis eos,
        tenetur ratione enim deserunt porro. Sint laudantium natus dolorum
        itaque cupiditate ut ullam placeat magnam, totam ab omnis eveniet dolore
        rerum, accusantium sequi? Commodi, est magnam ex itaque nam ea laborum
        ullam tempora vel adipisci, recusandae reiciendis qui delectus iste
        facilis accusantium voluptas, doloribus modi ad. Quidem in amet hic
        nesciunt reprehenderit, architecto dicta iste, cum sint quasi
        voluptatibus quam voluptatem nam necessitatibus illo maxime accusamus
        eveniet quis iure. Minima veniam officia veritatis illum excepturi ex
        omnis corrupti, est totam reprehenderit necessitatibus nulla odit
        officiis cumque pariatur saepe? Harum eos aliquid debitis molestias
        accusamus quis magni quam ducimus, ullam nostrum possimus nobis eum
        cupiditate minus sunt alias tempora? Temporibus exercitationem eos
        deleniti, eveniet qui officiis ab maiores dolorum aperiam quas rem,
        excepturi magnam ipsa ex ullam odit molestiae earum commodi adipisci
        consectetur minima quaerat non reiciendis suscipit? Ea nostrum quaerat,
        ullam tempora, excepturi nulla ratione beatae assumenda, molestias
        similique repellendus suscipit eum. Debitis veritatis placeat totam
        laboriosam fugiat cupiditate numquam sed velit ad mollitia blanditiis,
        impedit praesentium nihil, fugit obcaecati! Omnis ex, modi vero
        temporibus commodi dicta, quae iste praesentium, voluptas qui itaque!
        Assumenda placeat fugit excepturi nemo ipsa minima! Quasi autem ab
        minima dolore assumenda, doloribus iusto necessitatibus.
      </p>
    </div>
  );

  return (
    <div className="relative">
      <div className="flex flex-col justify-between">
        {parag}
        {showModal && modal}
        <div className="flex justify-end">
          <Button primary onClick={handleClick}>
            Open Modal
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ModalPage;
