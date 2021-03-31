import headImg from '../../../attest/img/head.png';
function Cuser() {
  return (
    <div className="home-shadow-box home-cuser">
      <img src={headImg} className="home-avator" alt="logo" />
      <div className="home-username">从不陨落</div>
      <div className="home-motto">愿天下心诚剑士人人可剑开天门！</div>
      <div className="home-tag">
        <div>
          <span>文章</span>
          <span>145</span>
        </div>
        <div>
          <span>标签</span>
          <span>145</span>
        </div>
        <div>
          <span>分类</span>
          <span>145</span>
        </div>
      </div>
    </div>
  );
}

export default Cuser;
