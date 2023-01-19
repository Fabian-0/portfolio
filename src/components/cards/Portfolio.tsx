import React, { useContext } from "react";
import { BoxesContext } from "../../App";

/* export interface IAppProps {
} */

export function Portfolio(/* props: IAppProps */) {
  const { setCtx } = useContext(BoxesContext);

  function handleClick() {
    setCtx((prevState) => ({ ...prevState, isCardVisible: false }));
  }
  return (
    <div className="porfolio-card">
      <button onClick={handleClick} className="card__btn">
        x
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque
        exercitationem totam distinctio voluptatum voluptatibus quisquam fugit
        amet repellat pariatur aliquid, quae et eligendi ex nihil tempore
        adipisci, ab perferendis corporis illo quasi debitis consectetur veniam.
        Molestias cumque ipsa ab quam, iure debitis qui odit nihil, aperiam
        voluptatum temporibus assumenda quia vero officiis quo. Iusto voluptates
        cumque est dolor ea blanditiis id, dicta porro molestias consequuntur
        beatae, rem laborum. Dignissimos, id quas dolores modi obcaecati ipsum
        illum alias pariatur officiis aperiam qui quasi repudiandae porro cum
        aliquam voluptas! Quas libero dolorem ut nihil reiciendis saepe commodi
        voluptatem mollitia? Non maxime amet, quas voluptas quam inventore, odio
        cumque repellendus dignissimos velit recusandae totam ullam eius,
        deserunt magni dolore sed. Commodi, in. Eveniet fugiat temporibus natus
        sunt. Veniam a assumenda dolor at, odit unde est beatae amet, itaque
        asperiores aperiam placeat quasi omnis iste sapiente architecto, ipsam
        molestiae quas dignissimos? Provident magnam architecto adipisci.
        Asperiores, magnam tempore exercitationem enim assumenda dolores
        obcaecati, minima quibusdam, eaque facere rerum maiores totam sapiente
        nisi! Quisquam ipsa quaerat, nemo necessitatibus ratione vel laborum
        soluta modi magnam earum in sapiente hic praesentium, harum quia illum
        maxime natus quo. Neque illum quos sunt dolore ab distinctio maxime
        impedit nam voluptatum, id dolorum rem culpa deleniti magni iure nulla
        saepe incidunt autem, asperiores explicabo iste corrupti. Quod eum natus
        cumque error saepe, placeat tempora debitis unde ex? Magni excepturi est
        magnam praesentium saepe, natus accusamus placeat qui laborum eligendi
        voluptatum suscipit, voluptatibus voluptas? Hic perspiciatis dolorem ea
        quibusdam iure quam accusamus incidunt molestias minima doloremque
        voluptatibus, explicabo neque, cum aperiam, nulla dignissimos pariatur
        ad dolor ipsa quia dolores magnam? Laborum, quos tenetur. Hic ab
        explicabo tempore, natus culpa suscipit cum at quidem reprehenderit
        eligendi ea corporis necessitatibus aperiam. Provident, assumenda qui.
        Ullam ducimus temporibus, ad quo reprehenderit placeat id deleniti quos
        obcaecati repellat quidem alias officia pariatur aperiam commodi,
        voluptatum dolorum exercitationem sed eos ab cupiditate distinctio.
        Mollitia unde velit nostrum quae dolor aperiam nihil libero vero
        aspernatur, atque illo fugiat, repellendus autem eum eaque optio!
        Doloremque quasi facilis cumque molestias id porro provident aperiam
        reprehenderit modi perspiciatis cum nulla ex, repellendus accusantium
        voluptate non rerum! Accusantium, maiores nam voluptatem omnis fugiat
        illum rerum incidunt repellat natus laborum harum neque, explicabo
        consequatur est culpa eaque, quas nulla corrupti! Animi dolore hic
        delectus necessitatibus ex, at inventore nihil dignissimos maxime ullam
        a commodi veniam corporis. Voluptas quis beatae eius cum minus
        recusandae voluptatibus exercitationem eaque veniam expedita architecto
        obcaecati, consequuntur sit eveniet magni in maxime quasi ea quia? Eius
        aliquam nostrum cumque? Voluptas excepturi autem accusantium ex pariatur
        est debitis odit asperiores provident sed dolores earum dignissimos,
        dolor sapiente nisi neque minus. Quaerat aperiam, deserunt, numquam
        mollitia libero laboriosam architecto iste temporibus porro ex molestias
        placeat eius accusantium recusandae eum omnis in ullam. Nihil quam
        veniam qui, facilis quia ab voluptatem illum pariatur, cupiditate vel
        possimus id laudantium excepturi deserunt modi, autem ex ipsa!
        Consequuntur alias quisquam debitis delectus. Quis ut voluptatibus vitae
        voluptatum, consequuntur illum voluptate alias in. Nesciunt quibusdam
        quisquam, vitae magni suscipit sequi quam eius tempora repellendus,
        eveniet at iste dolores aperiam, ipsum repellat quas distinctio.
        Eligendi optio perspiciatis reiciendis delectus? Aperiam sit vel neque!
        Dicta, delectus dolorum voluptatem necessitatibus nostrum omnis,
        repudiandae illo velit assumenda laboriosam autem quidem officiis. Ullam
        iusto in odio, nemo, pariatur facilis cumque delectus quod reprehenderit
        ipsa repellendus, esse quam sint eum consectetur saepe dolorem! Ipsa
        mollitia harum, cumque minus iure odio. Rem pariatur consectetur harum
        totam illum quas! Ad, eligendi ratione ut sapiente animi quasi facere in
        dolorem beatae vel, esse deserunt rerum corporis! Eaque fugit unde est
        molestias tenetur recusandae.
      </p>
    </div>
  );
}
