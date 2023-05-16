<template>
  <!-- General -->
  <PricingTable
    :headers="GeneralTableData().headers"
    :items="GeneralTableData().items"
  />
  <!-- General -->

  <!-- Products -->
  <PricingTable
    :headers="ProductsTableData().headers"
    :items="ProductsTableData().items"
  />
  <!-- Products -->

  <!-- Financial Engineering -->
  <PricingTable
    :headers="FinancialEngineeringTableData().headers"
    :items="FinancialEngineeringTableData().items"
  />
  <!-- Financial Engineering -->

  <!-- Open APIs -->
  <PricingTable
    :headers="OpenApisTableData().headers"
    :items="OpenApisTableData().items"
  />
  <!-- Open APIs -->

  <!-- Bridge -->
  <PricingTable
    :headers="BridgeTableData().headers"
    :items="BridgeTableData().items"
  />
  <!-- Bridge -->

  <!-- Bazaar -->
  <PricingTable
    :headers="BazaarTableData().headers"
    :items="BazaarTableData().items"
  />
  <!-- Bazaar -->

  <!-- Algo Trade -->
  <PricingTable
    :headers="AlgoTradeTableData().headers"
    :items="AlgoTradeTableData().items"
  />
  <!-- Algo Trade -->

  <!-- AI -->
  <PricingTable :headers="AITableData().headers" :items="AITableData().items" />
  <!-- AI -->

  <!-- Cloud Infrastructure -->
  <PricingTable
    :headers="CloudInfraTable().headers"
    :items="CloudInfraTable().items"
    has-buttons
  />
  <!-- Cloud Infrastructure -->
</template>

<script setup lang="ts">
// import data
import { GeneralTableData } from "@/data/pricing/GeneralTable";
import { ProductsTableData } from "@/data/pricing/ProductsTable";
import { FinancialEngineeringTableData } from "@/data/pricing/FinancialEngineeringTable";
import { OpenApisTableData } from "@/data/pricing/OpenApisTable";
import { BridgeTableData } from "@/data/pricing/BridgeTable";
import { BazaarTableData } from "@/data/pricing/BazaarTable";
import { AlgoTradeTableData } from "@/data/pricing/AlgoTradingTable";
import { AITableData } from "@/data/pricing/AITable";
import { CloudInfraTable } from "@/data/pricing/CloudInfraTable";
</script>

<style scoped></style>
