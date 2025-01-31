import type {
  Epoch,
  EpochId,
  EpochOverview,
  Product,
} from "@LAF/Pages/Bribes/Models";
import ServiceBase from "@/Services/ServiceBase";

export default class BribesService extends ServiceBase {
  public async rounds(product: Partial<Product>): Promise<{
    rounds: number[];
  }> {
    return this.fetch(`${this.host}/bribes/rounds`, {
      platform: product.platform,
      protocol: product.protocol,
    });
  }

  public async getEpoch(
    epochId: Omit<EpochId, "round"> & { round?: number } // Round is optional, picks latest if empty.
  ): Promise<{
    success: boolean;
    epoch?: Epoch;
  }> {
    return this.fetch(`${this.host}/bribes`, {
      platform: epochId.platform,
      protocol: epochId.protocol,
      round: epochId.round?.toString(),
    });
  }

  public async getOverview(): Promise<{
    epochs: EpochOverview[];
  }> {
    return this.fetch(`${this.host}/bribes/overview`);
  }
}
