import { Branch } from "../models/branchModel";
import branchData from "../data/branchData";

// initialize the branch data using the given data in the assignments instruction
const branches: Branch[] = branchData;

function newBranchId(branches: Branch[]): number {
  // get the id for new branch
  return branches.reduce(
    (id, branch) => (id > branch.id ? id : branch.id) + 1,
    0
  );
}

/**
 * @description Get all branches set the function async temporarily.
 * @returns a Promise that resolves to an array of `Branch` objects.
 */
export const getAllBranches = async (): Promise<Branch[]> => {
  return branches;
};

/**
 * @description get an branch by id.
 * @param {number} id - The ID of the branch.
 * @returns {Promise<Branch>}
 * @throws {Error} If the branch with the given ID is not found.
 */
export const getBranchById = async (id: number): Promise<Branch> => {
  // retieve the Branch's index from the Branches array by comparing the Branch ids
  const index: number = branches.findIndex((i) => i.id === id);
  // if the index is not found we expects a -1
  if (index === -1) {
    throw new Error(`Branches with ID ${id} not found`);
  }

  return branches[index];
};

/**
 * @description create an branch.
 * @param {{name: string;  address: string; phone: string;  }}
 * branch - the branch data
 * @returns {Promise<Branch>} A promise that resolves to the created branch
 */
export const createBranch = async (branch: {
  name: string;
  address: string;
  phone: string;
}): Promise<Branch> => {
  // define a new branch
  const newBranch: Branch = { id: newBranchId(branches), ...branch };

  // add the new branch to the global scoped array of branches
  branches.push(newBranch);
  return newBranch;
};

/**
 * @description Update an existing branch.
 * @param {number} id - The ID of the branch to update.
 * @param {{address: string; phone: string;}}
 * branch - the branch data
 * @returns {Promise<Branch>}
 * @throws {Error} If the branch with the given ID is not found.
 */
export const updateBranch = async (
  id: number,
  branch: {
    address: string;
    phone: string;
  }
): Promise<Branch> => {
  // retieve the Branch's index from the branches array by comparing the Branch ids
  const index: number = branches.findIndex((i) => i.id === id);
  // if the index is not found we expects a -1
  if (index === -1) {
    throw new Error(`Branch with ID ${id} not found`);
  }

  // update the branch information of the found index
  branches[index] = { ...branches[index], ...branch };

  return branches[index];
};

/**
 * @description Delete an branch.
 * @param {number} id - The ID of the branch to delete.
 * @returns {Promise<Branch>}
 * @throws {Error} If the branch with the given ID is not found.
 */
export const deleteBranch = async (id: number): Promise<Branch> => {
  const index: number = branches.findIndex((i) => i.id === id);
  if (index === -1) {
    throw new Error(`Branch with ID ${id} not found`);
  }

  // remove the branch from the branch array, start the delete form the index and only delete 1 index
  return branches.splice(index, 1)[0];
};
