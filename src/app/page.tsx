import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Link from "next/link";

export default function Home() {
  const items = [
    {
      title: "EZ Order",
      image: "https://portal.amata.com/vn/web/image/ezorder.jpg",
      link: "https://apps.powerapps.com/play/e/default-06d2bc4d-7325-430e-808f-ecfe9126a217/a/58d921fe-51e6-444f-bd3d-883346ead46a?tenantId=06d2bc4d-7325-430e-808f-ecfe9126a217&hint=8513fb94-d586-4c87-83df-bd4d5c551e0b&sourcetime=1749457509877&source=portal&hidenavbar=true",
    },
    {
      title: "IT Ticket",
      image: "https://portal.amata.com/vn/web/image/ticket.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
      link: "https://mis.amata.com/ticket/login.aspx",
    },
    {
      title: "HRIS",
      image: "https://portal.amata.com/vn/web/image/hris_staff.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
      link: "http://portalvn.amata.com:9669/New_Login/New_Index",
    },
    {
      title: "VN Intranet",
      image:
        "https://vnintranet.amata.com/intranet/wp-content/uploads/2024/12/bg2.png",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
      link: "https://vnintranet.amata.com/intranet/",

    },
    {
      title: "Online Approval",
      image:
        "https://portal.amata.com/vn/web/image/onlineapprove.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
      link: "https://mis.amata.com/online_approval/",
    },
    {
      title: "Car Booking",
      image:
        "https://portal.amata.com/vn/web/image/car_booking.jpg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
      link: "https://mis.amata.com/car_booking/login.aspx",
    },
    // {
    //   title: "Canada",
    //   image:
    //     "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   className: "absolute top-8 left-[30%] rotate-[4deg]",
    // },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        AMATA VN PORTAL
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className} key={item.title}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <Link href={item.link}>
            <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
              {item.title}
            </h3>
          </Link>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
