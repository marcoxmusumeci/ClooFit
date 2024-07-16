# automatically generated by the FlatBuffers compiler, do not modify

# namespace: openmeteo_sdk

import flatbuffers
from flatbuffers.compat import import_numpy
from typing import Any
from openmeteo_sdk.VariableWithValues import VariableWithValues
from typing import Optional
np = import_numpy()

class VariablesWithTime(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset: int = 0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = VariablesWithTime()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsVariablesWithTime(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    # VariablesWithTime
    def Init(self, buf: bytes, pos: int):
        self._tab = flatbuffers.table.Table(buf, pos)

    # VariablesWithTime
    def Time(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int64Flags, o + self._tab.Pos)
        return 0

    # VariablesWithTime
    def TimeEnd(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int64Flags, o + self._tab.Pos)
        return 0

    # VariablesWithTime
    def Interval(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int32Flags, o + self._tab.Pos)
        return 0

    # VariablesWithTime
    def Variables(self, j: int) -> Optional[VariableWithValues]:
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            obj = VariableWithValues()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # VariablesWithTime
    def VariablesLength(self) -> int:
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # VariablesWithTime
    def VariablesIsNone(self) -> bool:
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        return o == 0


