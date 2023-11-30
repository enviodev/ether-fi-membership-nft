/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
import {
  MembershipNFTContract_AdminChanged_loader,
  MembershipNFTContract_AdminChanged_handler,
  MembershipNFTContract_ApprovalForAll_loader,
  MembershipNFTContract_ApprovalForAll_handler,
  MembershipNFTContract_BatchMetadataUpdate_loader,
  MembershipNFTContract_BatchMetadataUpdate_handler,
  MembershipNFTContract_BeaconUpgraded_loader,
  MembershipNFTContract_BeaconUpgraded_handler,
  MembershipNFTContract_Initialized_loader,
  MembershipNFTContract_Initialized_handler,
  // MembershipNFTContract_MerkleUpdated_loader,
  // MembershipNFTContract_MerkleUpdated_handler,
  MembershipNFTContract_MetadataUpdate_loader,
  MembershipNFTContract_MetadataUpdate_handler,
  MembershipNFTContract_MintingPaused_loader,
  MembershipNFTContract_MintingPaused_handler,
  MembershipNFTContract_OwnershipTransferred_loader,
  MembershipNFTContract_OwnershipTransferred_handler,
  MembershipNFTContract_TokenLocked_loader,
  MembershipNFTContract_TokenLocked_handler,
  MembershipNFTContract_TransferBatch_loader,
  MembershipNFTContract_TransferBatch_handler,
  MembershipNFTContract_TransferSingle_loader,
  MembershipNFTContract_TransferSingle_handler,
  MembershipNFTContract_URI_loader,
  MembershipNFTContract_URI_handler,
  MembershipNFTContract_Upgraded_loader,
  MembershipNFTContract_Upgraded_handler,
} from "../generated/src/Handlers.gen";

import {
  AdminChangedEntity,
  ApprovalForAllEntity,
  BatchMetadataUpdateEntity,
  BeaconUpgradedEntity,
  InitializedEntity,
  // MerkleUpdatedEntity,
  MetadataUpdateEntity,
  MintingPausedEntity,
  OwnershipTransferredEntity,
  TokenLockedEntity,
  TransferBatchEntity,
  TransferSingleEntity,
  URIEntity,
  UpgradedEntity,
  EventsSummaryEntity,
} from "./src/Types.gen";

const GLOBAL_EVENTS_SUMMARY_KEY = "GlobalEventsSummary";

const INITIAL_EVENTS_SUMMARY: EventsSummaryEntity = {
  id: GLOBAL_EVENTS_SUMMARY_KEY,
  adminChangedsCount: BigInt(0),
  approvalForAllsCount: BigInt(0),
  batchMetadataUpdatesCount: BigInt(0),
  beaconUpgradedsCount: BigInt(0),
  initializedsCount: BigInt(0),
  merkleUpdatedsCount: BigInt(0),
  metadataUpdatesCount: BigInt(0),
  mintingPausedsCount: BigInt(0),
  ownershipTransferredsCount: BigInt(0),
  tokenLockedsCount: BigInt(0),
  transferBatchsCount: BigInt(0),
  transferSinglesCount: BigInt(0),
  uRIsCount: BigInt(0),
  upgradedsCount: BigInt(0),
};

MembershipNFTContract_AdminChanged_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

MembershipNFTContract_AdminChanged_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    adminChangedsCount: currentSummaryEntity.adminChangedsCount + BigInt(1),
  };

  let adminChangedEntity: AdminChangedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    previousAdmin: event.params.previousAdmin,
    newAdmin: event.params.newAdmin,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.AdminChanged.set(adminChangedEntity);
});

MembershipNFTContract_ApprovalForAll_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

MembershipNFTContract_ApprovalForAll_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    approvalForAllsCount: currentSummaryEntity.approvalForAllsCount + BigInt(1),
  };

  let approvalForAllEntity: ApprovalForAllEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    account: event.params.account,
    operator: event.params.operator,
    approved: event.params.approved,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.ApprovalForAll.set(approvalForAllEntity);
});

MembershipNFTContract_BatchMetadataUpdate_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

MembershipNFTContract_BatchMetadataUpdate_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    batchMetadataUpdatesCount:
      currentSummaryEntity.batchMetadataUpdatesCount + BigInt(1),
  };

  let batchMetadataUpdateEntity: BatchMetadataUpdateEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    _fromTokenId: event.params._fromTokenId,
    _toTokenId: event.params._toTokenId,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.BatchMetadataUpdate.set(batchMetadataUpdateEntity);
});

MembershipNFTContract_BeaconUpgraded_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

MembershipNFTContract_BeaconUpgraded_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    beaconUpgradedsCount: currentSummaryEntity.beaconUpgradedsCount + BigInt(1),
  };

  let beaconUpgradedEntity: BeaconUpgradedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    beacon: event.params.beacon,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.BeaconUpgraded.set(beaconUpgradedEntity);
});

MembershipNFTContract_Initialized_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

MembershipNFTContract_Initialized_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    initializedsCount: currentSummaryEntity.initializedsCount + BigInt(1),
  };

  let initializedEntity: InitializedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    version: event.params.version,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Initialized.set(initializedEntity);
});

// MembershipNFTContract_MerkleUpdated_loader(({ event, context }) => {
//   context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
// });

// MembershipNFTContract_MerkleUpdated_handler(({ event, context }) => {
//   let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

//   let currentSummaryEntity: EventsSummaryEntity =
//     summary ?? INITIAL_EVENTS_SUMMARY;

//   let nextSummaryEntity = {
//     ...currentSummaryEntity,
//     merkleUpdatedsCount: currentSummaryEntity.merkleUpdatedsCount + BigInt(1),
//   };

//   let merkleUpdatedEntity: MerkleUpdatedEntity = {
//     id: event.transactionHash + event.logIndex.toString(),
//     : event.params.,
//     : event.params.,
//     eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
//   };

//   context.EventsSummary.set(nextSummaryEntity);
//   context.MerkleUpdated.set(merkleUpdatedEntity);
// });

MembershipNFTContract_MetadataUpdate_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

MembershipNFTContract_MetadataUpdate_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    metadataUpdatesCount: currentSummaryEntity.metadataUpdatesCount + BigInt(1),
  };

  let metadataUpdateEntity: MetadataUpdateEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    _tokenId: event.params._tokenId,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.MetadataUpdate.set(metadataUpdateEntity);
});

MembershipNFTContract_MintingPaused_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

MembershipNFTContract_MintingPaused_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    mintingPausedsCount: currentSummaryEntity.mintingPausedsCount + BigInt(1),
  };

  let mintingPausedEntity: MintingPausedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    isPaused: event.params.isPaused,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.MintingPaused.set(mintingPausedEntity);
});

MembershipNFTContract_OwnershipTransferred_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

MembershipNFTContract_OwnershipTransferred_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    ownershipTransferredsCount:
      currentSummaryEntity.ownershipTransferredsCount + BigInt(1),
  };

  let ownershipTransferredEntity: OwnershipTransferredEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.OwnershipTransferred.set(ownershipTransferredEntity);
});

MembershipNFTContract_TokenLocked_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

MembershipNFTContract_TokenLocked_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    tokenLockedsCount: currentSummaryEntity.tokenLockedsCount + BigInt(1),
  };

  let tokenLockedEntity: TokenLockedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    _tokenId: event.params._tokenId,
    until: event.params.until,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.TokenLocked.set(tokenLockedEntity);
});

MembershipNFTContract_TransferBatch_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

MembershipNFTContract_TransferBatch_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    transferBatchsCount: currentSummaryEntity.transferBatchsCount + BigInt(1),
  };

  let transferBatchEntity: TransferBatchEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    operator: event.params.operator,
    from: event.params.from,
    to: event.params.to,
    ids: event.params.ids,
    values: event.params.values,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.TransferBatch.set(transferBatchEntity);
});

MembershipNFTContract_TransferSingle_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

MembershipNFTContract_TransferSingle_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    transferSinglesCount: currentSummaryEntity.transferSinglesCount + BigInt(1),
  };

  let transferSingleEntity: TransferSingleEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    operator: event.params.operator,
    from: event.params.from,
    to: event.params.to,
    event_id: event.params.id,
    value: event.params.value,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.TransferSingle.set(transferSingleEntity);
});

MembershipNFTContract_URI_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

MembershipNFTContract_URI_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    uRIsCount: currentSummaryEntity.uRIsCount + BigInt(1),
  };

  let uRIEntity: URIEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    value: event.params.value,
    event_id: event.params.id,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.URI.set(uRIEntity);
});

MembershipNFTContract_Upgraded_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

MembershipNFTContract_Upgraded_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    upgradedsCount: currentSummaryEntity.upgradedsCount + BigInt(1),
  };

  let upgradedEntity: UpgradedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    implementation: event.params.implementation,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Upgraded.set(upgradedEntity);
});
