// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { Aggregation } from './aggregation.js';
import { Unit } from './unit.js';
import { Variable } from './variable.js';


export class VariableWithValues {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):VariableWithValues {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsVariableWithValues(bb:flatbuffers.ByteBuffer, obj?:VariableWithValues):VariableWithValues {
  return (obj || new VariableWithValues()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsVariableWithValues(bb:flatbuffers.ByteBuffer, obj?:VariableWithValues):VariableWithValues {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new VariableWithValues()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

variable():Variable {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : Variable.undefined;
}

unit():Unit {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : Unit.undefined;
}

value():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

values(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readFloat32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
}

valuesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

valuesArray():Float32Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? new Float32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

valuesInt64(index: number):bigint|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readInt64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : BigInt(0);
}

valuesInt64Length():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

altitude():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readInt16(this.bb_pos + offset) : 0;
}

aggregation():Aggregation {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : Aggregation.none;
}

pressureLevel():number {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readInt16(this.bb_pos + offset) : 0;
}

depth():number {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.readInt16(this.bb_pos + offset) : 0;
}

depthTo():number {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.readInt16(this.bb_pos + offset) : 0;
}

ensembleMember():number {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.readInt16(this.bb_pos + offset) : 0;
}

previousDay():number {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? this.bb!.readInt16(this.bb_pos + offset) : 0;
}

}
