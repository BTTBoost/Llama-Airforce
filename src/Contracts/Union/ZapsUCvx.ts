/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface ZapsUCvxInterface extends utils.Interface {
  functions: {
    "CRVETH_CRV_INDEX()": FunctionFragment;
    "CRVETH_ETH_INDEX()": FunctionFragment;
    "CRV_TOKEN()": FunctionFragment;
    "CURVE_CRV_ETH_POOL()": FunctionFragment;
    "CURVE_CVXCRV_CRV_POOL()": FunctionFragment;
    "CURVE_CVX_ETH_POOL()": FunctionFragment;
    "CVXCRV_CRV_INDEX()": FunctionFragment;
    "CVXCRV_CVXCRV_INDEX()": FunctionFragment;
    "CVXCRV_STAKING_CONTRACT()": FunctionFragment;
    "CVXCRV_TOKEN()": FunctionFragment;
    "CVXETH_CVX_INDEX()": FunctionFragment;
    "CVXETH_ETH_INDEX()": FunctionFragment;
    "CVX_TOKEN()": FunctionFragment;
    "_claimAsEth(uint256)": FunctionFragment;
    "claimFromVaultAsCrv(uint256,uint256,address)": FunctionFragment;
    "claimFromVaultAsCvx(uint256,uint256,address)": FunctionFragment;
    "claimFromVaultAsCvxCrv(uint256,uint256,address)": FunctionFragment;
    "claimFromVaultAsEth(uint256,uint256,address)": FunctionFragment;
    "claimFromVaultAsUsdt(uint256,uint256,address)": FunctionFragment;
    "claimFromVaultViaUniV2EthPair(uint256,uint256,address,address,address)": FunctionFragment;
    "depositFromCrv(uint256,uint256,address,bool)": FunctionFragment;
    "depositFromCvx(uint256,uint256,address,bool)": FunctionFragment;
    "depositFromCvxCrv(uint256,uint256,address,bool)": FunctionFragment;
    "depositFromEth(uint256,address,bool)": FunctionFragment;
    "depositViaUniV2EthPair(uint256,uint256,address,address,address,bool)": FunctionFragment;
    "setApprovals()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CRVETH_CRV_INDEX"
      | "CRVETH_ETH_INDEX"
      | "CRV_TOKEN"
      | "CURVE_CRV_ETH_POOL"
      | "CURVE_CVXCRV_CRV_POOL"
      | "CURVE_CVX_ETH_POOL"
      | "CVXCRV_CRV_INDEX"
      | "CVXCRV_CVXCRV_INDEX"
      | "CVXCRV_STAKING_CONTRACT"
      | "CVXCRV_TOKEN"
      | "CVXETH_CVX_INDEX"
      | "CVXETH_ETH_INDEX"
      | "CVX_TOKEN"
      | "_claimAsEth"
      | "claimFromVaultAsCrv"
      | "claimFromVaultAsCvx"
      | "claimFromVaultAsCvxCrv"
      | "claimFromVaultAsEth"
      | "claimFromVaultAsUsdt"
      | "claimFromVaultViaUniV2EthPair"
      | "depositFromCrv"
      | "depositFromCvx"
      | "depositFromCvxCrv"
      | "depositFromEth"
      | "depositViaUniV2EthPair"
      | "setApprovals"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "CRVETH_CRV_INDEX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CRVETH_ETH_INDEX",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "CRV_TOKEN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "CURVE_CRV_ETH_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CURVE_CVXCRV_CRV_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CURVE_CVX_ETH_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CVXCRV_CRV_INDEX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CVXCRV_CVXCRV_INDEX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CVXCRV_STAKING_CONTRACT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CVXCRV_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CVXETH_CVX_INDEX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CVXETH_ETH_INDEX",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "CVX_TOKEN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "_claimAsEth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromVaultAsCrv",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromVaultAsCvx",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromVaultAsCvxCrv",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromVaultAsEth",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromVaultAsUsdt",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromVaultViaUniV2EthPair",
    values: [BigNumberish, BigNumberish, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFromCrv",
    values: [BigNumberish, BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFromCvx",
    values: [BigNumberish, BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFromCvxCrv",
    values: [BigNumberish, BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFromEth",
    values: [BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "depositViaUniV2EthPair",
    values: [BigNumberish, BigNumberish, string, string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovals",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "CRVETH_CRV_INDEX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CRVETH_ETH_INDEX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "CRV_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "CURVE_CRV_ETH_POOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CURVE_CVXCRV_CRV_POOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CURVE_CVX_ETH_POOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CVXCRV_CRV_INDEX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CVXCRV_CVXCRV_INDEX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CVXCRV_STAKING_CONTRACT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CVXCRV_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CVXETH_CVX_INDEX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CVXETH_ETH_INDEX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "CVX_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_claimAsEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromVaultAsCrv",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromVaultAsCvx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromVaultAsCvxCrv",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromVaultAsEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromVaultAsUsdt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromVaultViaUniV2EthPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositFromCrv",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositFromCvx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositFromCvxCrv",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositFromEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositViaUniV2EthPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovals",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ZapsUCvx extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ZapsUCvxInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CRVETH_CRV_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;

    CRVETH_ETH_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;

    CRV_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    CURVE_CRV_ETH_POOL(overrides?: CallOverrides): Promise<[string]>;

    CURVE_CVXCRV_CRV_POOL(overrides?: CallOverrides): Promise<[string]>;

    CURVE_CVX_ETH_POOL(overrides?: CallOverrides): Promise<[string]>;

    CVXCRV_CRV_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;

    CVXCRV_CVXCRV_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;

    CVXCRV_STAKING_CONTRACT(overrides?: CallOverrides): Promise<[string]>;

    CVXCRV_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    CVXETH_CVX_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;

    CVXETH_ETH_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;

    CVX_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    _claimAsEth(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    claimFromVaultAsCrv(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    claimFromVaultAsCvx(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    claimFromVaultAsCvxCrv(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    claimFromVaultAsEth(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    claimFromVaultAsUsdt(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    claimFromVaultViaUniV2EthPair(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      router: string,
      outputToken: string,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    depositFromCrv(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      lock: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    depositFromCvx(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      lock: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    depositFromCvxCrv(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      lock: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    depositFromEth(
      minAmountOut: BigNumberish,
      to: string,
      lock: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    depositViaUniV2EthPair(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      router: string,
      inputToken: string,
      to: string,
      lock: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setApprovals(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  CRVETH_CRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

  CRVETH_ETH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

  CRV_TOKEN(overrides?: CallOverrides): Promise<string>;

  CURVE_CRV_ETH_POOL(overrides?: CallOverrides): Promise<string>;

  CURVE_CVXCRV_CRV_POOL(overrides?: CallOverrides): Promise<string>;

  CURVE_CVX_ETH_POOL(overrides?: CallOverrides): Promise<string>;

  CVXCRV_CRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

  CVXCRV_CVXCRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

  CVXCRV_STAKING_CONTRACT(overrides?: CallOverrides): Promise<string>;

  CVXCRV_TOKEN(overrides?: CallOverrides): Promise<string>;

  CVXETH_CVX_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

  CVXETH_ETH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

  CVX_TOKEN(overrides?: CallOverrides): Promise<string>;

  _claimAsEth(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  claimFromVaultAsCrv(
    amount: BigNumberish,
    minAmountOut: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  claimFromVaultAsCvx(
    amount: BigNumberish,
    minAmountOut: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  claimFromVaultAsCvxCrv(
    amount: BigNumberish,
    minAmountOut: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  claimFromVaultAsEth(
    amount: BigNumberish,
    minAmountOut: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  claimFromVaultAsUsdt(
    amount: BigNumberish,
    minAmountOut: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  claimFromVaultViaUniV2EthPair(
    amount: BigNumberish,
    minAmountOut: BigNumberish,
    router: string,
    outputToken: string,
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  depositFromCrv(
    amount: BigNumberish,
    minAmountOut: BigNumberish,
    to: string,
    lock: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  depositFromCvx(
    amount: BigNumberish,
    minAmountOut: BigNumberish,
    to: string,
    lock: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  depositFromCvxCrv(
    amount: BigNumberish,
    minAmountOut: BigNumberish,
    to: string,
    lock: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  depositFromEth(
    minAmountOut: BigNumberish,
    to: string,
    lock: boolean,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  depositViaUniV2EthPair(
    amount: BigNumberish,
    minAmountOut: BigNumberish,
    router: string,
    inputToken: string,
    to: string,
    lock: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setApprovals(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    CRVETH_CRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CRVETH_ETH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CRV_TOKEN(overrides?: CallOverrides): Promise<string>;

    CURVE_CRV_ETH_POOL(overrides?: CallOverrides): Promise<string>;

    CURVE_CVXCRV_CRV_POOL(overrides?: CallOverrides): Promise<string>;

    CURVE_CVX_ETH_POOL(overrides?: CallOverrides): Promise<string>;

    CVXCRV_CRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CVXCRV_CVXCRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CVXCRV_STAKING_CONTRACT(overrides?: CallOverrides): Promise<string>;

    CVXCRV_TOKEN(overrides?: CallOverrides): Promise<string>;

    CVXETH_CVX_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CVXETH_ETH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CVX_TOKEN(overrides?: CallOverrides): Promise<string>;

    _claimAsEth(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimFromVaultAsCrv(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimFromVaultAsCvx(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimFromVaultAsCvxCrv(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimFromVaultAsEth(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimFromVaultAsUsdt(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimFromVaultViaUniV2EthPair(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      router: string,
      outputToken: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    depositFromCrv(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      lock: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    depositFromCvx(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      lock: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    depositFromCvxCrv(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      lock: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    depositFromEth(
      minAmountOut: BigNumberish,
      to: string,
      lock: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    depositViaUniV2EthPair(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      router: string,
      inputToken: string,
      to: string,
      lock: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovals(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    CRVETH_CRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CRVETH_ETH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CRV_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    CURVE_CRV_ETH_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    CURVE_CVXCRV_CRV_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    CURVE_CVX_ETH_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    CVXCRV_CRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CVXCRV_CVXCRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CVXCRV_STAKING_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;

    CVXCRV_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    CVXETH_CVX_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CVXETH_ETH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CVX_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    _claimAsEth(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    claimFromVaultAsCrv(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    claimFromVaultAsCvx(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    claimFromVaultAsCvxCrv(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    claimFromVaultAsEth(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    claimFromVaultAsUsdt(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    claimFromVaultViaUniV2EthPair(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      router: string,
      outputToken: string,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    depositFromCrv(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      lock: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    depositFromCvx(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      lock: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    depositFromCvxCrv(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      lock: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    depositFromEth(
      minAmountOut: BigNumberish,
      to: string,
      lock: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    depositViaUniV2EthPair(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      router: string,
      inputToken: string,
      to: string,
      lock: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setApprovals(overrides?: Overrides & { from?: string }): Promise<BigNumber>;
  };

  populateTransaction: {
    CRVETH_CRV_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CRVETH_ETH_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CRV_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CURVE_CRV_ETH_POOL(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CURVE_CVXCRV_CRV_POOL(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CURVE_CVX_ETH_POOL(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CVXCRV_CRV_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CVXCRV_CVXCRV_INDEX(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CVXCRV_STAKING_CONTRACT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CVXCRV_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CVXETH_CVX_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CVXETH_ETH_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CVX_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _claimAsEth(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    claimFromVaultAsCrv(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    claimFromVaultAsCvx(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    claimFromVaultAsCvxCrv(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    claimFromVaultAsEth(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    claimFromVaultAsUsdt(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    claimFromVaultViaUniV2EthPair(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      router: string,
      outputToken: string,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    depositFromCrv(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      lock: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    depositFromCvx(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      lock: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    depositFromCvxCrv(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      to: string,
      lock: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    depositFromEth(
      minAmountOut: BigNumberish,
      to: string,
      lock: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    depositViaUniV2EthPair(
      amount: BigNumberish,
      minAmountOut: BigNumberish,
      router: string,
      inputToken: string,
      to: string,
      lock: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setApprovals(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
