import { SoundOutlined } from '@ant-design/icons'
function Cpublic(popus) {
  return (
    <div className="home-shadow-box home-cpublic">
      <div>
        <SoundOutlined className="home-horn" />
        <span>公告{popus.name}</span>
      </div>
      <div>
        每月图片OSS服务器费用吃不消，接点广告回点血，只在文章结束之后出现，尽量不影响大伙观看体验😅。
      </div>
    </div>
  );
}
export default Cpublic;
