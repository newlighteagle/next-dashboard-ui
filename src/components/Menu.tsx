import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "DASHBOARD",
    items: [
      {
        icon: "/dashboard-basic.png",
        label: "Basic",
        href: "/basic",
        visible: ["admin"],
      },
      {
        icon: "/dashboard-environment.png",
        label: "Land # Environment",
        href: "/land-environment",
        visible: ["admin"],
      },
      {
        icon: "/dashboard-economic.png",
        label: "Economic Transaction",
        href: "/economic-transaction",
        visible: ["admin"],
      },
      {
        icon: "/dashboard-sustainability.png",
        label: "Sustainability & RSPPO Compliance",
        href: "/basic",
        visible: ["admin"],
      },
      {
        icon: "/dashboard-project.png",
        label: "Project",
        href: "/project",
        visible: ["admin"],
      },
    ],
  },
  {
    title: "Master Data",
    items: [
      {
        icon: "/master-farmer.png",
        label: "Farmer",
        href: "/farmer",
        visible: ["admin"],
      },
      {
        icon: "/master-plot.png",
        label: "Plot",
        href: "/plot",
        visible: ["admin"],
      },
      {
        icon: "/master-ics.png",
        label: "ICS",
        href: "/ics",
        visible: ["admin"],
      },
      {
        icon: "/master-sme.png",
        label: "SME",
        href: "/sme",
        visible: ["admin"],
      },
      {
        icon: "/master-mill.png",
        label: "Mills",
        href: "/mills",
        visible: ["admin"],
      },
      {
        icon: "/master-transaction.png",
        label: "Transaction",
        href: "/transaction",
        visible: ["admin"],
      },
      {
        icon: "/master-activity.png",
        label: "Activity Code",
        href: "/activity",
        visible: ["admin"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className='mt-4 text-sm'>
      {menuItems.map(i=>(
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">{i.title}</span>
          {
            i.items.map(item=>(
              <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2">
                <Image src={item.icon} alt={item.label} width={20} height={20}/>
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            ))
          }
        </div>
      ))}
    </div>
  )
}

export default Menu