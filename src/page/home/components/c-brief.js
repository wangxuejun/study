import { TagFilled, HistoryOutlined, SmileFilled } from '@ant-design/icons'
function Clist() {
  return (
    <div className="brief-compomnent">
      <h1>分享2021新鲜面经和资源分享</h1>
      <p>前言 前阵子猫大狠狠的更新了一波ET6.0，然后说已经稳定可用了，只是机器人什么的都还没有加入，准备今天研究下新的ET6.0，感受下经过项目千锤百炼的优秀框架的思路。 由于之前已</p>
      <p>
        <SmileFilled className="brief-icon" />
        <span>王学军</span>
        <HistoryOutlined className="brief-icon" />
        <span>发表于2021-3-17</span>
        <TagFilled className="brief-icon" />
        <span>笔记</span>
      </p>
    </div>
  );
}

export default Clist;
