"use client";
import HeaderGeneral from "@/components/HeaderGeneral/HeaderGeneral";
import Modal from "@/components/Modal/Modal";
import BlockSum from "@/components/Order/BlockSum";
import { BlockItem } from "@/components/Order/interface";
import Section from "@/components/Section/Section";
import { HumanIcon, InventoryIcon, Plus } from "@/image/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Inventory = async () => {
  const block: BlockItem[] = [
    {
      orders: "All Products",
      pending: "Active",
      image: InventoryIcon,
      sumCount: 10,
      select: false
    },
    {
      orders: "Low Stock Alert",
      pending: "Expired",
      completed: "1 Start Rating",
      image: HumanIcon,
      sumCount: 15,
      select: false
    }
  ]

  const styles = (index: any) => {
    return {
      bg: index === 0 ? 'bg-primary-0' : 'bg-white',
      color: index === 0 ? 'text-white' : 'text-black-800',
      titleColor: index === 0 ? 'text-white' : index >= 1 ? 'text-black-800' : 'text-danger',
      bgImage: index === 0 ? 'bg-primary-500' : 'bg-secondary-400',
    }

  }

  const router = useRouter()


  const createNewProduct = () => {
    router.push('/inventory/new', { scroll: false })
  }
  return <Section>

    <HeaderGeneral name={'Add a New Product'} title="Inventory Summary" icon={<Plus />} handleOpen={createNewProduct} />
    <div className="grid xs:grid-col lg:grid-cols-2 xs:gap-2 lg:gap-4 xs:my-2 lg:my-5 ">

      {block.map((item, indx) => {
        return <BlockSum item={item} key={indx} count={indx} className={styles(indx)} />;
      })}
    </div>


  </Section>
};

export default Inventory;
