import MainTop from "components/MainTop/MainTop";
import NFTList , { NFTProps } from "components/NFT/NFT";
import CreatorsList ,{ CreatorsProps } from "components/Creators/Creators";
import History ,{ HistoryProps } from "components/History/History";
import LNB from "layout/LNB";
import s from "./index.module.scss";
import data from "../../components/NFT/NFTTrending.json"
import data2 from "../../components/NFT/Recently.json"
import data3 from "../../components/Creators/Creators.json"
import data4 from "../../components/History/History.json"

export default function marketplace() {
  return (
    <div className={s.wrap}>
      <MainTop />
      <div className={s.content_wrap}>
          <div className={s.content_left}>
            <section className={s.discover}>
              <div className={s.discover_info}>
                <strong className={s.title}>Discover, collect, and sell extraordinary NFTs</strong>
                <p className={s.desc}>Enter in this creative world. Discover now the latest NFTs or start creating your own!</p>
                <div className={s.btn_area}>
                  <button type="button" className={s.btn_discover}>Discover now</button>
                  <button type="button" className={s.btn_playvideo}>Watch video</button>
                </div>
              </div>
            </section>
            <NFTList kind="trending" data = {data as NFTProps[]} />
            <NFTList kind="recently" data = {data2 as NFTProps[]} />
          </div>
          <div className={s.content_right}>
            <CreatorsList data={data3 as CreatorsProps[]} />
            <History data={data4 as HistoryProps[]} />
          </div>
      </div>
    </div>
  );
}
