// src/components/VerticalTimelineComponent.js
import * as React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./VerticalTimelineComponent.css"; // Import the CSS file
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";

const VerticalTimelineComponent = () => {
  return (
    <VerticalTimeline lineColor="#b8b6b2">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="19-р зууны сүүлч:"
        iconStyle={{ background: "#001b54", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h4 className="vertical-timeline-element-title">
          АНУ-д хүүхдийн хөгжлийн шинжлэх ухааны судалгааны анхдагч сэтгэл
          судлалын лабораторийг байгуулжээ.
        </h4>

        <p>1896 он: Г.Стэнли Холл</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="20-р зууны эхэн үе:"
        iconStyle={{ background: "#001b54", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h4 className="vertical-timeline-element-subtitle">
          Танин мэдэхүйн хөгжлийн үе шатуудыг танилцуулж, танин мэдэхүйн
          хөгжлийн талаархи үндсэн ажлаа нийтэлж эхлэв.
        </h4>
        <p>1920-иод он: Жан Пиаже</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#001b54", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h4 className="vertical-timeline-element-subtitle">
          Танин мэдэхүйн хөгжилд нийгмийн харилцан үйлчлэлийн үүргийг онцолж,
          нийгэм соёлын онолыг боловсруулжээ.
        </h4>
        <p>1930-аад он: Лев Выготский</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="20-р зууны дунд үе:"
        iconStyle={{ background: "#001b54", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h4 className="vertical-timeline-element-subtitle">
          Сэтгэц-нийгмийн хөгжлийн онолоо танилцуулж, хувийн шинж чанар үүсэх үе
          шатуудыг боловсрүүлжээ.
        </h4>
        <p>1950-иад он: Эрик Эриксон</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="20-р зууны сүүлч:"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h4 className="vertical-timeline-element-subtitle">
          Ёс зүйн үндэслэлийг ойлгоход нөлөөлж буй ёс суртахууны хөгжлийн үе
          шатуудыг танилцуулжээ.
        </h4>
        <p>1970-аад он: Лоуренс Колберг</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="20-р зууны сүүлээс 21-р зууны эхэн үе:"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h4 className="vertical-timeline-element-subtitle">
          Сэтгэл хөдлөлийн оюун ухааныг дэлгэрүүлж, сэтгэл хөдлөлийн ухамсарыг
          хувийн болон мэргэжлийн амжилттай холбосон.
        </h4>
        <p>1990-ээд он: Даниел Големан</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h4 className="vertical-timeline-element-subtitle">
          Амжилтыг урьдчилан таамаглахад урт хугацааны зорилгод тууштай байдал,
          хүсэл тэмүүллийг онцлон тэмдэглэж, эрэл хайгуулын тухай ойлголтыг
          гаргажээ.
        </h4>
        <p>2010 он: Анжела Дакворт</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
};

export default VerticalTimelineComponent;
